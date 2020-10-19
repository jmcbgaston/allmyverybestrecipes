class Api::IngredientsController < ApplicationController

    def create
        @ingredient = Ingredient.create(ingredient_params)
    end

    #just for me
    def destroy
        @ingredient = Ingredient.find(params[:id])
        @ingredient.destroy
    end

    def ingredient_params
        params.require(:ingredient).permit(:name, :quantity_type)
    end

end
