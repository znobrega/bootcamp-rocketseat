import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
            },
            content: "Conteúdo do comentário ajsdi asuhd iaushd iausdh h"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
        },
        date: "04 Jun 2019",
        content:
          "Pessoal, alguém sabe se a Rocketseat está contratandoACHO Q NSO?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
            },
            content: "Conteúdo do comentário ajsdi asuhd iaushd iausdh h"
          },
          {
            id: 2,
            author: {
              name: "Diego aaaaaa",
              avatar:
                "https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Carlos Nobrega",
          avatar:
            "https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
        },
        date: "04 Jun 2019",
        content:
          "Pessoal, alguém sabe se a Rocketseat está contratandoACHO Q NSO?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
            },
            content: "Conteúdo do comentário ajsdi asuhd iaushd iausdh h"
          },
          {
            id: 2,
            author: {
              name: "Diego aaaaaa",
              avatar:
                "https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    return this.state.posts.map(post => <PostItem post={post} />);
  }
}

export default PostList;
