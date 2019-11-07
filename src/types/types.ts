type User = {
    id: string,
    name: string,
    friends: Array<string>
}

export type Group = {
    name: string,
    id: string,
    owner: string
}

type Task = {
    name: string,
    id: string,
    group: string,
    owner: string,
    isComplete: boolean,
}

type Comment = {
    owner: string,
    id: string,
    task: string,
    content: string
}

export type DefaultState = {
    users: Array<User>,
    groups: Array<Group>,
    tasks: Array<Task>,
    comments: Array<Comment>
}

