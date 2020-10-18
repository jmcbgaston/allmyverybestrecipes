
class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )
        if @user
            login!(@user)
            render "/api/users/show"
        else
            render json: ["Sorry, we don't recognize that email or password. Try again!"], status: 401
        end
    end

    def destroy
        logout!
        render json: ["Logout successful."] # message is for testing - not for final product
    end

end
