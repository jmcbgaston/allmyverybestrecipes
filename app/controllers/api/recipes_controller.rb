class Api::RecipesController < ApplicationController

    def index
        @recipes = Recipe.all
    end

    def show
        @recipe = Recipe.find_by(id: params[:id])
        render "api/recipes/show"
    end
    
    def create
        debugger
        @recipe = Recipe.new(recipe_params)
        if @recipe
            render "api/recipes/show"
        else
            render json: @recipe.errors.full_messages, status: 422
        end
    end

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
    end

    def recipe_params
        params.require(:recipe).permit(:title, :description, :directions, :prep_time, :cook_time, :number_of_servings)
    end

end
