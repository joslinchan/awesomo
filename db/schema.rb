ActiveRecord::Schema.define(version: 2018_08_08_200306) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hexes", force: :cascade do |t|
    t.string "code"
    t.bigint "inspiration_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["inspiration_id"], name: "index_hexes_on_inspiration_id"
  end

  create_table "inspirations", force: :cascade do |t|
    t.string "title"
    t.string "image_url"
    t.string "url"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_inspirations_on_user_id"
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

  add_foreign_key "hexes", "inspirations"
  add_foreign_key "inspirations", "users"
end
