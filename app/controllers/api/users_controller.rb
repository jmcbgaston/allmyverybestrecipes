class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        @shopping_list = ShoppingList.new(owner_id: @user.id)
        if @user.save && @shopping_list.save
            login!(@user)
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:display_name, :email, :password)
    end

end
