<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\Api\V1\ArticleChildCommentRequest;
use App\Models\ArticleComment;
use App\Models\Article;
use App\Models\ArticleChildComment;
use App\Transformers\ArticleChildCommentTransformer;
use App\Models\User;

class ArticleChildCommentController extends Controller
{
    public function store(ArticleChildCommentRequest $request, ArticleComment $articleComment, ArticleChildComment $articleChildComments)
    {
        $articleChildComment = new ArticleChildComment;
        $articleChildComment->user_id = $this->user()->id;
        $articleChildComment->article_comment_id = $articleComment->id;
        $articleChildComment->create_time = $_SERVER['REQUEST_TIME'];
        $articleChildComment->content = $request->content;
        $articleChildComment->reply_id = $articleChildComments->id ?? 0;
        $articleChildComment->save();

    	return $this->response->item($articleChildComment, new ArticleChildCommentTransformer())->setStatusCode(201);
    }

    public function destroy(ArticleChildComment $articleChildComment)
    {
        $this->authorize('destroy', $articleChildComment);
        $articleChildComment->delete();

        return $this->response->noContent();
    }

    public function index(ArticleComment $articleComment)
    {
        $comment_id = $articleComment->id;
        $data = ArticleChildComment::where('article_comment_id', $comment_id)->get()->toArray();

        foreach ($data as $key => $val) {

            if ($data[$key]['reply_id'] == 0) {
                $data[$key]['aite']['id'] = $comment_id;
                $data[$key]['aite']['user'] = User::where('id', $comment_id)->first(['name'])->name;
            } else {
                $data[$key]['aite']['id'] = $val['reply_id'];
                $data[$key]['aite']['user'] = User::where('id', $val['reply_id'])->first(['name'])->name;
            }
        }

        return $this->response->array($data)->setStatusCode(201);
    }
}