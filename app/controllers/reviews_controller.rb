class ReviewsController < ApplicationController
    
    def index
        reviews = Review.all 
        render json: reviews
    end

    def create
        review = current_user.reviews.create(review_params)
        if review.id
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # def udpate
    #     review = current_user.reviews.find_by(id: params[:id])
    #     if review
    #         review.update(review_params);
    #         render json: review
    #     else
    #         render json: {error: "You are not authorized"}, status: :unauthorized
    #     end    
    # end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
            if current_user.id == review.user_id
                review.destroy
                render :no_content
            else
                render json: { errors: ["You do not have permissions"]}, status: :unauthorized
            end
        else
            render json: { error: "review not found"}, status: :not_found
        end
    end

    private

    def review_params
        params.permit(:date, :comment, :professional_id, :appointment_id)
    end
end
