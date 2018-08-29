<?php

namespace App\Http\Controllers\Api\V1;
use App\Models\Article;
use App\Transformers\ArticleTransformer;
use App\Http\Requests\Api\V1\ArticleRequest;
use Illuminate\Http\Request;

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

    public function index(Request $request, Article $article)
    {
        $query = $article->query();

        if ($classify_id = $request->classify_id)
            $query->where('classify_id', $classify_id);

        switch ($request->order) {
            case 'recent':
                $query->recent();
                break;

            default:
                // $query->recentReplied();
                break;
        }

        $articles = $query->paginate(1);

        return $this->response->paginator($articles, new ArticleTransformer());
    }
}