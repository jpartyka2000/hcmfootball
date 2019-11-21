"""testapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from testapp import views

from django.contrib.auth import views as auth_views

admin.autodiscover()

urlpatterns = [
    #path('', views.index, name='index'),
    path('', auth_views.LoginView.as_view(template_name="registration/login.html"), name='login'),
    path('login/', auth_views.LoginView.as_view(template_name="registration/login.html"), name='login'),
    path('football/', views.index, name='index'),
    path('logout/', auth_views.LoginView.as_view(template_name="registration/logout.html"), name='logout'),
    path('accounts/profile/', views.index, name='index'),
    #path('register/', special_registration_page, name='register'),
    path('admin/', admin.site.urls),

    path('test_index/', views.test_index, name='test_index'),
    path(r'^post_draft_pick/$', views.post_draft_pick, name='post_draft_pick'),
]
