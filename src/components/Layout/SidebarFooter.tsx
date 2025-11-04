import { useAppSelector } from '../../app/hooks'

export function SidebarFooter() {
  const name = useAppSelector((state) => state.auth.name);

  return (
    <div className="sidebar-footer">
      Logged in as <strong>{name}</strong>
    </div>
  );
}
