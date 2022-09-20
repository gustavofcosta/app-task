export interface PropsTask {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface Props {
  tasks: PropsTask[];
  isLoading: boolean;
}
