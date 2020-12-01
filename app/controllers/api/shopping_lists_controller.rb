class Api::ShoppingListsController < ApplicationController
    def show
        @shopping_list = ShoppingList.find_by(id: params[:id])
        render "api/shopping_lists/show"
    end

    def update
        @shopping_list = ShoppingList.find_by(id: params[:id])


        if @shopping_list && @shopping_list.update({items: params[:items]})
            render "api/shopping_lists/show"
        else
            render json: @shopping_list.errors.full_messages, status: 422
        end 
    end
end
