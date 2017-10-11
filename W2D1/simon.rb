class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    puts "Press enter to start!"
    gets.chomp
    system("clear")

    take_turn until @game_over

    game_over_message
    reset_game
    take_turn
  end

  def take_turn
    show_sequence
    require_sequence

    round_success_message unless @game_over
    @sequence_length += 1

  end

  def show_sequence
    add_random_color
    @sequence_length.times do |i|
      p @seq[i]
      sleep(1)
      system("clear")
    end
  end

  def require_sequence
    input = []
    @sequence_length.times do |i|
      puts "Enter one color:"
      one_input = gets.chomp
      input << one_input

      @game_over = true unless input[0..i] == @seq[0..i]
    end

    nil
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "Round Successful"
    sleep(1)
    system("clear")
  end

  def game_over_message
    puts "You lost"
    system("clear")
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end

game = Simon.new
game.play
