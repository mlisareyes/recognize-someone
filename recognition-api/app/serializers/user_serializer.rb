class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email #remove id ? 
end
