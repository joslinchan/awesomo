# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_07_031246) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "colour_palettes", force: :cascade do |t|
    t.string "title"
    t.string "image_url"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_colour_palettes_on_user_id"
  end

  create_table "colours", force: :cascade do |t|
    t.string "title"
    t.string "image_url"
    t.string "url"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_colours_on_user_id"
  end

  create_table "palette_likes", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "colour_palette_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["colour_palette_id"], name: "index_palette_likes_on_colour_palette_id"
    t.index ["user_id"], name: "index_palette_likes_on_user_id"
  end

  create_table "patterns", force: :cascade do |t|
    t.string "title"
    t.string "image_url"
    t.string "url"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_patterns_on_user_id"
  end

  create_table "search_terms", force: :cascade do |t|
    t.string "term"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "searchings", force: :cascade do |t|
    t.bigint "search_term_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "colour_palette_id"
    t.index ["colour_palette_id"], name: "index_searchings_on_colour_palette_id"
    t.index ["search_term_id"], name: "index_searchings_on_search_term_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.boolean "admin", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "colour_palettes", "users"
  add_foreign_key "colours", "users"
  add_foreign_key "palette_likes", "colour_palettes"
  add_foreign_key "palette_likes", "users"
  add_foreign_key "patterns", "users"
  add_foreign_key "searchings", "colour_palettes"
  add_foreign_key "searchings", "search_terms"
end
