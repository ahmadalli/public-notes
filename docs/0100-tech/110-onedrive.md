# OneDrive

## Excluding Folders From Sync

:::info

After wasting a few hours trying to find ways to exclude `node_modules` from syncing, I failed to find a working solution other than manually excluding the folder from the OneDrive settings. The following methods are the ones I found during my research.

:::

### Symbolic Links

:::warning

This method doesn't work anymore with the latest versions of npm and yarn because [they delete symbolic links](https://github.com/npm/cli/issues/3669).

:::

You can exclude folders from syncing is by creating a junction point between the folder you want to exclude and a folder that's not synchronized. Here's an example for excluding the `node_modules` folder under `src`. You need to run the following command in the command prompt with administrator privileges:

```bat
mkdir src\node_modules
mkdir dst\node_modules
mklink /J src\node_modules dst\node_modules
```

### Group Policy

:::warning

This method doesn't work for personal OneDrive accounts.

:::

You can use [`Exclude specific kinds of folders from being uploaded`](https://learn.microsoft.com/en-us/sharepoint/use-group-policy#exclude-specific-kinds-of-folders-from-being-uploaded) policy:

1. Find OneDrive group policy files from `C:\Program Files\Microsoft OneDrive\<latest build number>\adm`
1. Copy `OneDrive.admx` to `C:\Windows\PolicyDefinitions`
1. Copy `OneDrive.adml` to `C:\Windows\PolicyDefinitions\en-US`
1. Open Group Policy Editor (`gpedit.msc`)
1. Go to `Computer Configuration` > `Administrative Templates` > `OneDrive`
1. Enable `Exclude specific kinds of folders from being uploaded`
1. Add the folder you want to exclude from syncing to the list of policy keywords
