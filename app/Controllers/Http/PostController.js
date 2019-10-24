'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Post = use('App/Models/Post')

class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   */
  async index () {
    const posts = await Post.all();

    return posts;
  }

  /**
   * Create/save a new post.
   * POST posts
   */
  async store ({ request }) {
    //const { content } = request;
    const data = request.only(['content']);
    const post = await Post.create(data);

    return post;
  }

  /**
   * Display a single post.
   * GET posts/:id
   */
  async show ({ params }) {
    const post = await Post.find(params.id);

    return post
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   */
  async update ({ params, request }) {
    const data = request.only(['content']);
    const post = await Post.find(params.id);

    post.merge(data);

    await post.save();

    return post;

  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   */
  async destroy ({ params }) {
    const post = await Post. find(params.id);

    await post.delete();
  }
}

module.exports = PostController
