# vfcc-registry

-   my error handling is making me see fires particulary
    between the Login component and useLogin hook -- axiosError in the
    useLogin hook is the trouble causer, when there is a network error in the useLogin hook,
    the useEffect hook containing the axiosError in the Login component updates for the first login try but
    for all subsequent tries it fails. I ended up using adding isLoading to
    the useEffect dependencies because its value always change per every login
    attempt therefore triggering the useEffect to run again and in turn show the axiosError
    to the user.

-   l am using json-server for mock backend
-   this project is running on port 3005 because 3000 is the
    default for json-server
-   please review my folder structure and everything else and leave
    my design alone.
