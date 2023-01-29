from django.contrib import admin

from .models import (ExperienceLevel, Instrument, JamRequest, JamResponse,
                     MusicGenre, UserGenre, UserInstrument, UserMedia,
                     UserReview, Users)


class UsersAdmin(admin.ModelAdmin):
    list_display = ('id', 'fname', 'lname', 'email', 'phone')


class ExperienceLevelAdmin(admin.ModelAdmin):
    list_display = ('id', 'level')


class InstrumentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'type')


class JamRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'userid', 'instrumentid', 'genreid', 'location', 'exp_level', 'status')


class JamResponseAdmin(admin.ModelAdmin):
    list_display = ('id', 'jrid', 'userid', 'status')


class MusicGenreAdmin(admin.ModelAdmin):
    list_display = ('id', 'genre')


class UserGenreAdmin(admin.ModelAdmin):
    list_display = ('id', 'userid', 'genreid')


class UserInstrumentAdmin(admin.ModelAdmin):
    list_display = ('id', 'userid', 'instrumentid', 'exp_level')


class UserMediaAdmin(admin.ModelAdmin):
    list_display = ('id', 'userid', 'type', 'location', 'seconds')


class UserReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'userid', 'reviewerid', 'rating')


admin.site.register(Users, UsersAdmin)
admin.site.register(UserInstrument, UserInstrumentAdmin)
admin.site.register(UserGenre, UserGenreAdmin)
admin.site.register(JamRequest, JamRequestAdmin)
admin.site.register(JamResponse, JamResponseAdmin)
admin.site.register(ExperienceLevel, ExperienceLevelAdmin)
admin.site.register(Instrument, InstrumentAdmin)
admin.site.register(MusicGenre, MusicGenreAdmin)
admin.site.register(UserReview, UserReviewAdmin)
admin.site.register(UserMedia, UserMediaAdmin)
