class Map
  def initialize
    @map = []
  end

  def assign(key, value)
    if @map.include?([key,value])
      index = @map.index([key,value])
      @map[index] = [key, value]
    else
      @map << [key, value]
    end
  end

  def lookup(key)
    @map.each {|pair| return pair[1] if pair[0] == key}
    nil
  end

  def remove(key)
    @map.reject! {|pair| pair[0] == key}
    nil
  end

  def show
    @map
  end
end
