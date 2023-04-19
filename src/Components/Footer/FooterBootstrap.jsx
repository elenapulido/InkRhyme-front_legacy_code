import React from 'react'

const FooterBootstrap = () => {
  return (
    <div>

<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">    
    
        <ul class="nav col-md-4 justify-content-start list-unstyled d-flex">
            <li class="ms-3">Privacidad</li>
            <li class="ms-3">Términos</li>
            <li class="ms-3">FAQ</li>
        </ul>    
    
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#linkedin"/></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
            
        </ul>
  </footer>
</div>

    </div>
  )
}

export default FooterBootstrap