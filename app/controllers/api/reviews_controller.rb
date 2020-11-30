class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render "api/reviews/index"
    end

    # def show
    #     @review = Review.find(params[:id])
    #     render "api/reviews/index"
    # end
    
    def create
        @review = Review.new(review_params)
        # @review.author_id = current_user.id
        if @review.save
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    # untested 
    def update
        @review = Review.find_by(id: params[:id])
        if @review && @review.update(review_params)
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end 
    end
    
    def destroy
        @review = Review.find_by(id: params[:id])

        # debugger

        @review.destroy
        render "api/review/show"
    end

    def review_params
        # params.require(:review).permit(:body, :rating, :recipe_id, :reviewer_id)
        params.permit(:body, :rating, :recipe_id, :reviewer_id)
    end

end
