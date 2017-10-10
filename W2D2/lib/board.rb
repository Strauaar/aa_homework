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
    stones = @cups[start_pos]
    @cups[start_pos] = []

    cup_idx = start_pos
    until stones.empty?
      cup_idx += 1
      cup_idx = 0 if cup_idx > 13
      if cup_idx == 6 && @current_player == @first_player
        @cups[6] << stones.pop
      elsif cup_idx == 13 && @current_player == @second_player
        @cups[13] << stones.pop
      else
        @cups[cup_idx] << stones.pop
      end
    end

    render
    next_turn(cup_idx)
  end

  def next_turn(ending_cup_idx)

    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      :switch
    else
      ending_cup_idx
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
    p_1_count = @cups[6].count
    p_2_count = @cups[13].count

    if p_1_count == p_2_count
      :draw
    else
      p_1_count > p_2_count ? @first_player : @second_player
    end
  end
end
