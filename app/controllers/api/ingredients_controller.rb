class Api::IngredientsController < ApplicationController

    def create
        @ingredient = Ingredient.new(ingredient_params)
        if @ingredient.save
            render "api/ingredients/show"
        end
    end

    #just for me
    def destroy
        @ingredient = Ingredient.find(params[:id])
        @ingredient.destroy
    end

    def ingredient_params
        # params.require(:ingredient).permit(:amount, :name, :quantity_type)
        params.permit(:amount, :name, :quantity_type)
    end

end