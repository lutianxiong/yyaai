<?php

namespace App\Http\Controllers\Api\V1;
// use Illuminate\Http\Request;
use App\Models\Article;
use App\Transformers\ArticleTransformer;
use App\Http\Requests\Api\V1\ArticleRequest;

class ArticleController extends Controller
{
    public function store(ArticleRequest $request, Article $article)
    {
    	$article->fill($request->all());
    	$article->user_id = $this->user()->id;
    	$article->create_time = $_SERVER['REQUEST_TIME'];
    	$article->save();

    	return $this->response->item($article, new ArticleTransformer())->setStatusCode(201);
    }

    public function update(ArticleRequest $request, Article $article)
    {
        $this->authorize('update', $article);
        $article->update($request->all());

        return $this->response->item($article, new ArticleTransformer());
    }

    public function destroy(Article $article)
    {
    	$this->authorize('destroy', $article);
    	$article->delete();

    	return $this->response->noContent();
    }

    public function tests(Request $request)
    {
    	echo 'Hello World';
    }
}