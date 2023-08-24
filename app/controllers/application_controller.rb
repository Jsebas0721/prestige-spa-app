class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user
    User.find_by_id(session[:user_id]);
  end

end
