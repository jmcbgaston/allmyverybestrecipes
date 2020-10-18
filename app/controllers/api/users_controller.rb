class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "/api/users/show"
        else
            render json: ["Invalid email/password combination"], status: 422
        end
    end

    def user_params
        params.require(:user).permit(:display_name, :email, :password)
    end

end
