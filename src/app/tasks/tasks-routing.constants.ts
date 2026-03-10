export const NewTaskRouteKind = {
  NewTask: 'new-task',
  CopyTask: 'copy-task',
  CopyPreTask: 'copy-pretask'
} as const;

export type NewTaskRouteKind = (typeof NewTaskRouteKind)[keyof typeof NewTaskRouteKind];

export const EditTaskRouteKind = {
  EditTask: 'edit-task',
  EditTaskShowAllChunks: 'edit-task-cAll'
} as const;

export type EditTaskRouteKind = (typeof EditTaskRouteKind)[keyof typeof EditTaskRouteKind];

export const NewPretaskRouteKind = {
  NewPretask: 'new-preconfigured-tasks',
  CopyPretask: 'copy-preconfigured-tasks',
  CopyTask: 'copy-tasks'
} as const;

export type NewPretaskRouteKind = (typeof NewPretaskRouteKind)[keyof typeof NewPretaskRouteKind];

export const EditPretaskRouteKind = {
  EditPretask: 'edit-preconfigured-tasks'
} as const;

export type EditPretaskRouteKind = (typeof EditPretaskRouteKind)[keyof typeof EditPretaskRouteKind];
