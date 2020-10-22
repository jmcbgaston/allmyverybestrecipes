class Api::RecipesController < ApplicationController

    def index
        @recipes = Recipe.all
        render "api/recipes/index"
    end

    def show
        @recipe = Recipe.find(params[:id])
        render "api/recipes/show"
    end
    
    def create
        @recipe = Recipe.new(recipe_params)
        @recipe.author_id = current_user.id
        if @recipe.save
            render "api/recipes/show"
        else
            render json: @recipe.errors.full_messages, status: 422
        end
    end

    # untested 
    def update
        @recipe = Recipe.find_by(id: params[:id])
        if @recipe && @recipe.update(recipe_params)
            render "api/recipes/show"
        else
            render json: @recipe.errors.full_messages, status: 422
        end 
    end
    
    def destroy
        @recipe = Recipe.find_by(id: params[:id])
        @recipe.destroy
        render "api/recipes/show"
    end

    def recipe_params
        params.require(:recipe).permit(:title, :description, :directions, :prep_time, :cook_time, :number_of_servings, :photo)
    end

end
