require 'json'

get '/' do
  # Look in app/views/index.erb
  @notes = Note.all
  erb :index
end

post '/post' do
  Note.create!(params)
  redirect '/'
end

post '/delete' do
  Note.delete(params[:note_delete_id])
  redirect '/'
end

post '/update' do
  Note.update(params[:id_stored], {:title => params[:title_stored], :content => params[:content_stored]})
  redirect '/'
end

post '/test' do
  note_to_delete = Note.find(params[:id])
  Note.update(params[:id], {:title => params[:title]})
 # data.
#   p {id: 3, title: "Big Butts", content: "I like big butts"}.to_json;
end


