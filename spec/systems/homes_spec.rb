require "rails_helper"

RSpec.describe "HomesController", type: :system do
  context "on home" do
    before do
      visit root_path
    end
    it "is right URL" do
      expect(current_path).to eq root_path
    end
  end
end