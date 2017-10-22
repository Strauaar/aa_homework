class BooksController < ApplicationController
  def index
    # your code here
    @books = Book.all
  end

  def new
    # your code here
  end

  def create
    # your code here
    Book.create(book_params)
    redirect_to action: 'index'
  end

  def destroy
    # your code here
    book = Book.find_by(id: params[:id])
    if book.delete
      redirect_to action: 'index'
    else
      render text: book.errors.full_messages
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
