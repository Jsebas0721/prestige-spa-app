class ProfessionalsController < ApplicationController

    def index
        professionals = Professional.all
        render json: professionals, include: ['reviews.user']
    end
end
