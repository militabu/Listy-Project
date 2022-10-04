import { FunctionComponent } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

interface IProps {
  to: string,
  children: JSX.Element,
}

export const CustomLink: FunctionComponent<IProps>= ({to, children, ...props}) => {
  const resolvedPath = useResolvedPath(to);
  // end: true says that the entire path must matchd
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <div className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}