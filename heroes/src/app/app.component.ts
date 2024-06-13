import { initFlowbite } from 'flowbite';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { Component,OnInit,PLATFORM_ID,Inject} from '@angular/core';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'heroes';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Este código solo se ejecutará en el navegador
      if (typeof initFlowbite === 'function') {
        initFlowbite();
        this.darkMode()
      }
    }
  }

  darkMode(){
      // Obtiene los íconos de toggle de tema
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (!themeToggleDarkIcon || !themeToggleLightIcon) {
      console.error('Theme toggle icons not found.');
      return;
    }

    // Establecer el modo oscuro por defecto si no hay una preferencia guardada
    if (!localStorage.getItem('color-theme')) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else if (localStorage.getItem('color-theme') === 'dark') {
      document.documentElement.classList.add('dark');
      themeToggleLightIcon.classList.remove('hidden');
    } else {
      themeToggleDarkIcon.classList.remove('hidden');
    }

    // Obtiene el botón de toggle de tema
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (!themeToggleBtn) {
      console.error('Theme toggle button not found.');
      return;
    }

    // Añade el evento click al botón de toggle de tema
    themeToggleBtn.addEventListener('click', () => {
      // Alterna los íconos dentro del botón
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      // Alterna el tema y guarda la configuración en localStorage
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        }
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }
    });
  }

}
