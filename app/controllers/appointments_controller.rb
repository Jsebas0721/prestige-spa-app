class AppointmentsController < ApplicationController

    def index
        appointments = Appointment.all
        render json: appointments
    end

    def create
        appointment = current_user.appointments.create(appointment_params)
        if appointment.id
            render json: appointment, status: :created
        else
            render json: { errors: appointment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        appointment = current_user.appointments.find_by(id: params[:id])
        if appointment
            appointmnet.update(appointment_params);
            render json: appointment
        else
            render json: {error: "You are not authorized"}, status: :unauthorized
        end    
    end

    def destroy
        appointment = Appointment.find_by(id: params[:id])
        if appointment
            if current_user.id == appointment.user_id
                appointment.destroy
                render :no_content
            else
                render json: { errors: ["You do not have permissions"]}, status: :unauthorized
            end
        else
            render json: { error: "Appointment not found"}, status: :not_found
        end
    end

    private

    def appointment_params
        params.permit(:service_name, :service_type, :duration, :date, :time, :cost, :location, :professional_id)
    end
end
