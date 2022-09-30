const request = require("supertest");
import { Request, Response } from "express";
const app = require("./index");

interface IResponse extends Response {
  _body: {
    userId: string;
    name: string;
    rating: string;
    genre: string;
    image: string;
    likes: number;
    _id: string;
    __v: number;
  };
}

interface IPosts extends Response {
  _body: [IPost]
}

interface IPost {
  userId: string;
  name: string;
  rating: string;
  genre: string;
  image: string;
  likes: number;
  _id: string;
  __v: number;
}

let mockUserId = ''
let mockName = ''
let mock_id = ''

describe("Posts", () => {
  test("It should be able to create posts and get posts and delete posts", (done) => {
    request(app)
      .post("/api/posts/")
      .send({
        name: "austin",
        rating: "5/5",
        genre: "Thriller",
        userId: "113821008080613850752",
        image: { base64: "200302002020" },
      })
      .then((response: IResponse) => {
        mockUserId = response._body.userId;
        mockName = response._body.name;
        mock_id = response._body._id;
        expect(response.statusCode).toBe(201);
        done();
      });
  });
  test("It should be able to then get all posts from user", (done) => {
    request(app)
      .get(`/api/posts/mainfeed/${mockUserId}`)
      .then((response: IPosts) => {
        let flag = false;
        response._body.forEach((el) => {
          if (el.name == mockName) flag = true;
        });
        expect(flag).toBe(true);
        done();
      });
  });

  test("It should be able to delete posts by ID", (done) => {
    request(app)
      .delete(`/api/posts/post/delete/${mock_id}`)
      .then((response: IResponse) => {
        expect(response.statusCode).toBe(204);
        done();
      })
  })



});
