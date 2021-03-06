<?php

namespace App\Models;

use App\Models\Store\Address;
use App\Models\Store\Cart;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Auth;

class User extends Authenticatable implements JWTSubject
{
    public $table = 'app_users';
    public $primaryKey = 'id';
    protected $fillable = ['phone', 'name', 'password', 'avatar', 'sex', 'birthday', 'address', 'description', 'weibo_id', 'qq_id'];

    /**
     * 关联案例表
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function article()
    {
        return $this->hasMany('App\Models\Article','user_id');
    }

    /**
     * 关联咨询表
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function advisory()
    {
        return $this->hasMany('App\Models\Advisory','user_id');
    }

    

    /**
     * 关联案例评论表
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function articleComment()
    {
        return $this->hasMany('App\Models\ArticleComment','user_id');
    }

    /**
     * 关联案例子评论表
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function articleChildComment()
    {
        return $this->hasMany('App\Models\ArticleChildComment','user_id');
    }

    /**
     * 关联咨询评论表
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function advisoryComment()
    {
        return $this->hasMany('App\Models\AdvisoryComment','user_id');
    }

    /**
     * 关联咨询子评论表
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function advisoryChildComment()
    {
        return $this->hasMany('App\Models\AdvisoryChildComment','user_id');
    }


    /**
     *关联订单表
    */
    public function order()
    {
        return $this->hasMany('App\Models\Store\Order', 'user_id');
    }



    public function cart()
    {
        return $this->hasMany(Cart::class, 'user_id');
    }

    public function address()
    {
        return $this->hasMany(Address::class, 'user_id');
    }

    /**
     * @return int 返回user id
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function isAuthorOf($model)
    {
        return $this->id == $model->user_id;
    }
}
