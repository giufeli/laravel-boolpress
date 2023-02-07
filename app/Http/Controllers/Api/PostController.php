<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::all();

        return response()->json([
            'succes'=> true,
            'results'=> $posts
        ]);
    }


    public function show(Post $post)
    {

        //$post = Post::where('id', $post->id)->with(['category', 'tags'])->first();

        return response()->json([
            'succes'=> true,
            'results'=> $post
        ]);
    }
}
