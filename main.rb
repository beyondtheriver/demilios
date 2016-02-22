require 'sinatra'
require 'sendgrid-ruby'

get '/' do
  erb :home
end

get '/about' do
  erb :about
end

get '/contact' do
  erb :contact
end

get '/flavors' do
  erb :flavors
end

post '/contact' do
  @name = params["name"]
  @email = params["email"]
  @message = params["message"]
  puts params["name"]
  puts params["email"]
  puts params["message"] # keeps coming up empty.

  if @name.empty? && @email.empty?
    return "Please provide a name and email."
  elsif @name.empty?
    return "Please provide a name."
  elsif @email.empty?
    return "Please provide an email address."
  end

  client = SendGrid::Client.new do |c|
    c.api_key = ENV['SENDGRID_API_KEY']
  end

  mail = SendGrid::Mail.new do |m|
    m.to = @email
    m.from = 'sharp1209@gmail.com'
    m.subject = 'Thanks For Signing Up!'
    m.text = "Hey #{@name.capitalize}, thanks for signing up! You join others to be the first to know the best deals on Old World Ice Treats!"
  end

  client.send(mail)

  "Hey #{@name.capitalize}, thanks for signing up! You should recieve a confirmation email shortly, and be on your way to receiving the best deals on Old World Ice Treats!"
end
