<?php

/* sites/all/themes/gavias_unix/templates/page/parts/topbar.html.twig */
class __TwigTemplate_2da1d25d7f7bbf1dc51043b91ebc3833a7e86090d41c0a5bd38317d657da7e14 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 8);
        $filters = array("t" => 48, "raw" => 53);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array('t', 'raw'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<div class=\"topbar\">
  <div class=\"container\">
    <div class=\"topbar-inner\">
      <div class=\"row\">
        
        <div class=\"topbar-left col-sm-6 col-xs-6\">
          <div class=\"social-list\">
            ";
        // line 8
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "facebook", array())) {
            // line 9
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "facebook", array()), "html", null, true));
            echo "\"><i class=\"fa fa-facebook\"></i></a>
            ";
        }
        // line 10
        echo " 
            ";
        // line 11
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "twitter", array())) {
            // line 12
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "twitter", array()), "html", null, true));
            echo "\"><i class=\"fa fa-twitter-square\"></i></a>
            ";
        }
        // line 13
        echo " 
            ";
        // line 14
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "skype", array())) {
            // line 15
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "skype", array()), "html", null, true));
            echo "\"><i class=\"fa fa-skype\"></i></a>
            ";
        }
        // line 16
        echo " 
            ";
        // line 17
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "instagram", array())) {
            // line 18
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "instagram", array()), "html", null, true));
            echo "\"><i class=\"fa fa-instagram\"></i></a>
            ";
        }
        // line 19
        echo " 
            ";
        // line 20
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "dribbble", array())) {
            // line 21
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "dribbble", array()), "html", null, true));
            echo "\"><i class=\"fa fa-dribbble\"></i></a>
            ";
        }
        // line 22
        echo " 
            ";
        // line 23
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "linkedin", array())) {
            // line 24
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "linkedin", array()), "html", null, true));
            echo "\"><i class=\"fa fa-linkedin-square\"></i></a>
            ";
        }
        // line 25
        echo " 
            ";
        // line 26
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "pinterest", array())) {
            // line 27
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "pinterest", array()), "html", null, true));
            echo "\"><i class=\"fa fa-pinterest\"></i></a>
            ";
        }
        // line 28
        echo " 
            ";
        // line 29
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "google", array())) {
            // line 30
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "google", array()), "html", null, true));
            echo "\"><i class=\"fa fa-google-plus-square\"></i></a>
            ";
        }
        // line 31
        echo " 
            ";
        // line 32
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "youtube", array())) {
            // line 33
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "youtube", array()), "html", null, true));
            echo "\"><i class=\"fa fa-youtube-square\"></i></a>
            ";
        }
        // line 34
        echo " 
            ";
        // line 35
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "vimeo", array())) {
            // line 36
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "vimeo", array()), "html", null, true));
            echo "\"><i class=\"fa fa-vimeo-square\"></i></a>
            ";
        }
        // line 37
        echo "  
            ";
        // line 38
        if ($this->getAttribute(($context["custom_social_link"] ?? null), "tumblr", array())) {
            // line 39
            echo "              <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["custom_social_link"] ?? null), "tumblr", array()), "html", null, true));
            echo "\"><i class=\"fa fa-tumblr-square\"></i></a>
            ";
        }
        // line 40
        echo "  
          </div>
        </div>

        <div class=\"topbar-right col-sm-6 col-xs-6\">
          
          ";
        // line 46
        if ((($context["custom_account"] ?? null) == "")) {
            // line 47
            echo "            <ul class=\"gva_topbar_menu\">
              <li><a href=\"";
            // line 48
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["login_link"] ?? null), "html", null, true));
            echo "\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Login")));
            echo "</a></li>
              <li><a href=\"";
            // line 49
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["register_link"] ?? null), "html", null, true));
            echo "\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Register")));
            echo "</a></li>
            </ul>  
          ";
        } else {
            // line 52
            echo "            <ul class=\"gva_topbar_menu login\">
              <li>";
            // line 53
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["custom_account"] ?? null)));
            echo "</li>
            </ul>  
          ";
        }
        // line 55
        echo "  
        </div>

      </div>
    </div>  
  </div>  
</div>
";
    }

    public function getTemplateName()
    {
        return "sites/all/themes/gavias_unix/templates/page/parts/topbar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  206 => 55,  200 => 53,  197 => 52,  189 => 49,  183 => 48,  180 => 47,  178 => 46,  170 => 40,  164 => 39,  162 => 38,  159 => 37,  153 => 36,  151 => 35,  148 => 34,  142 => 33,  140 => 32,  137 => 31,  131 => 30,  129 => 29,  126 => 28,  120 => 27,  118 => 26,  115 => 25,  109 => 24,  107 => 23,  104 => 22,  98 => 21,  96 => 20,  93 => 19,  87 => 18,  85 => 17,  82 => 16,  76 => 15,  74 => 14,  71 => 13,  65 => 12,  63 => 11,  60 => 10,  54 => 9,  52 => 8,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "sites/all/themes/gavias_unix/templates/page/parts/topbar.html.twig", "/home/piyon/v8/sites/all/themes/gavias_unix/templates/page/parts/topbar.html.twig");
    }
}
