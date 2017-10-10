class Board
  attr_accessor :cups, :name1, :name2

  def initialize(name1, name2)
    @cups = Array.new(14) {Array.new}
    place_stones
    @first_player = name1
    @second_player = name2
    @current_player = @first_player
  end

  def place_stones
    @cups.map.with_index do |cup, i|
      next if i == 6 || i == 13
      4.times do |i|
        cup << :stone
      end
    end
  end

  def valid_move?(start_pos)
    if !(start_pos > 0) || !(start_pos < 13)
      raise "Invalid starting cup"
    end
    true
  end

  def make_move(start_pos, current_player_name)
    render
    next_turn(start_pos)
    copy_cups = @cups.dup
    count = @cups[start_pos].count
    @cups[start_pos] = []
    cup = -1

    ((start_pos + 1)..(start_pos + count)).each do |i|
      idx = i % 13
      if @current_player == @first_player
        @cups[idx] << :stone unless idx == 13
        @cups[(idx + 1) % 13] << :stone if idx == 13
      elsif @current_player == @second_player
        @cups[idx] << :stone unless idx == 6
        @cups[(idx + 1) % 13] << :stone if idx == 6
      end
      cup = idx
    end
    p cup

    if (cup == 13 && @current_player == @second_player) || (cup == 6 && @current_player == @first_player)
      return :prompt
    elsif @current_player == @first_player && (cup <= 0 && cup < 6)
      return :switch
    elsif @current_player == @second_player && (cup <= 7 && cup <= 13)
      return :switch
    end
    if !copy_cups[cup].empty?
      return cup
    end
  end

  def next_turn(ending_cup_idx)
    if @current_player == @first_player
      @current_player = @second_player
    else
      @current_player = @first_player
    end

  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return @cups[0..5].all? { |cup| cup.empty? } || @cups[7..12].all? { |cup| cup.empty? }
    false
  end

  def winner
  end
end
