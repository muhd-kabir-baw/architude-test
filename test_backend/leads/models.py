from django.db import models

# Create your models here.
class ContactForm(models.Model):
    name = models.CharField(max_length=45)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.CharField(max_length=300)
    
    def __str__(self):
        return self.name


""" class Entry(models.Model):
    contactForm = models.EmbeddedField(
        model_container= ContactForm,
    ) """