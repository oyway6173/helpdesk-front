

export function getRoleFromToken() {

    if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        // Split the token into its three parts: header, payload, and signature
        const parts = token.split('.');
        
        // Decode the payload from base64
        const payload = JSON.parse(atob(parts[1]));
        
        // Extract the role from the payload
        const role = payload.role;
        
        // localStorage.setItem('role', role);
        // Return the role
        return role;
    } else {
        return 'guest'
    }
    
  }