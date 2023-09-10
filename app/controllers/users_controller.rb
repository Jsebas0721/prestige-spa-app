class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]
    before_action :permitted, only: [:create]

    def index
        users = User.all 
        render json: users
    end

    def show
        render json: current_user
    end

    def create
        user = User.create(user_params);
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = current_user
        if user
            user.update(user_params)
            render json: user 
        else
            render json: {error: "You are not authorized"}, status: :unauthorized
        end   
    end

    private

    def user_params
        params.permit(:id, :username, :password, :password_confirmation, :first_name, :last_name, :email, :profile_picture)
    end
end
