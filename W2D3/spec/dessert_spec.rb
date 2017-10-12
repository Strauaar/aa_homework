require 'rspec'
require 'dessert'
require 'chef'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { Chef.new("chef") }
  let(:type) { "cake" }
  let(:quantity) { 8 }


  subject(:dessert) { Dessert.new(type, quantity, chef) }

  describe "#initialize" do
    let(:bad_dessert) { Dessert.new("cake", "non-int", "chef")}

    it "sets a type" do
      expect(dessert.type).to eq("cake")
    end

    it "sets a quantity" do
      expect(dessert.quantity).to eq(8)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to be_empty
    end


    it "raises an ar gument error when given a non-integer quantity" do
      expect do
        bad_dessert
      end.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    before(:each) do
      dessert.add_ingredient("flour")
    end
    it "adds an ingredient to the ingredients array" do
      expect(dessert.ingredients).to eq(["flour"])
    end
  end

  describe "#mix!" do
    before(:each) do
      dessert.add_ingredient("flour")
      dessert.add_ingredient("eggs")
      dessert.add_ingredient("butter")
    end

    let(:unshuffled_array) { double(dessert.ingredients) }
    let(:shuffled_array) { dessert.mix! }

    it "shuffles the ingredient array" do
      expect(shuffled_array).not_to eq(unshuffled_array)
    end
  end

  describe "#eat" do
    before(:each) do
      dessert.eat(5)
    end

    let(:eat_too_much) { dessert.eat(9) }

    it "subtracts an amount from the quantity" do
      expect(dessert.quantity).to eq(3)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect do
        eat_too_much
      end.to raise_error(RuntimeError)
    end

  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(dessert.serve).to include("Chef")
    end
  end

  describe "#make_more" do

    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake)
      dessert.make_more
    end

  end
end
