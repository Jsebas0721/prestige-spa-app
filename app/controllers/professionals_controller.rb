class ProfessionalsController < ApplicationController

    def index
        professionals = Professional.all
        render json: professionals
    end
end
