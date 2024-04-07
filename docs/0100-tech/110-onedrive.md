# OneDrive

## Excluding Folders From Sync

You can exclude folders from syncing is by creating a junction point between the folder you want to exclude and a folder that's not synchronized. Here's an example for excluding the `node_modules` folder under `src`. You need to run the following command in the command prompt with administrator privileges:

```bat
mkdir src\node_modules
mkdir dst\node_modules
mklink /J src\node_modules dst\node_modules
```
