class Ability
  include CanCan::Ability

  def initialize(user)

    alias_action(:create, :read, :update, :delete, to: :crud)

    user ||= User.new # guest user (not logged in)

    if user.admin?
      can :manage, :all
    else
      can :read, :all
    end

         
  
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities
  end
end
