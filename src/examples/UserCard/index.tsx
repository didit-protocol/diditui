import { IconButton } from '@/components'
import { UserCard } from '@/components/UserCard'

function UserCardExample() {
  return (
    <div className="flex items-center gap-4">
      <button type="button" className="hover:opacity-70 transition-opacity duration-300">
        <UserCard
          name="John Doe"
          label="Software Engineer"
          avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </button>
      <IconButton icon="settings" />
    </div>
  )
}

export { UserCardExample }
