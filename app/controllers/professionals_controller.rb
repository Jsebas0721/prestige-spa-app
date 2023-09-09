class ProfessionalsController < ApplicationController

    def index
        professionals = Professional.all
        render json: professionals, include: ['reviews', 'reviews.user']
    end
end
