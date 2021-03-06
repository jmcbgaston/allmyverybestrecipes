class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render "api/reviews/index"
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

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
        @review.destroy
        render "api/review/show"
    end

    def review_params
        params.permit(:body, :rating, :recipe_id, :reviewer_id)
    end

end
